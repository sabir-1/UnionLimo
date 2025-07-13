#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const IMAGES_DIR = 'public/imgs'
const OUTPUT_DIR = 'public/imgs/optimized'

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Convert images to WebP
async function convertToWebP(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath)
    console.log(`✅ Converted: ${inputPath} -> ${outputPath}`)
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error)
  }
}

// Process all images in directory
async function processImages(dir) {
  const files = fs.readdirSync(dir)
  
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      await processImages(filePath)
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const relativePath = path.relative(IMAGES_DIR, filePath)
      const outputPath = path.join(OUTPUT_DIR, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'))
      
      // Create subdirectories if needed
      const outputDir = path.dirname(outputPath)
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }
      
      await convertToWebP(filePath, outputPath)
    }
  }
}

// Main execution
async function main() {
  console.log('🔄 Starting image optimization...')
  await processImages(IMAGES_DIR)
  console.log('✅ Image optimization complete!')
}

main().catch(console.error) 