#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

// Critical CSS extraction
async function extractCriticalCSS(url, outputPath) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  try {
    await page.goto(url, { waitUntil: 'networkidle0' })
    
    // Extract critical CSS
    const criticalCSS = await page.evaluate(() => {
      const styleSheets = Array.from(document.styleSheets)
      let criticalCSS = ''
      
      styleSheets.forEach(sheet => {
        try {
          const rules = Array.from(sheet.cssRules || [])
          rules.forEach(rule => {
            if (rule.selectorText) {
              // Check if selector matches visible elements
              const elements = document.querySelectorAll(rule.selectorText)
              const hasVisibleElements = Array.from(elements).some(el => {
                const rect = el.getBoundingClientRect()
                return rect.top < window.innerHeight && rect.left < window.innerWidth
              })
              
              if (hasVisibleElements) {
                criticalCSS += rule.cssText + '\n'
              }
            }
          })
        } catch (e) {
          // Skip external stylesheets
        }
      })
      
      return criticalCSS
    })
    
    // Write critical CSS to file
    fs.writeFileSync(outputPath, criticalCSS)
    console.log(`✅ Critical CSS extracted to: ${outputPath}`)
    
  } catch (error) {
    console.error('❌ Error extracting critical CSS:', error)
  } finally {
    await browser.close()
  }
}

// Main execution
async function main() {
  const url = process.argv[2] || 'http://localhost:3000'
  const outputPath = 'public/css/critical.css'
  
  console.log(`🔄 Extracting critical CSS from: ${url}`)
  await extractCriticalCSS(url, outputPath)
}

main().catch(console.error) 