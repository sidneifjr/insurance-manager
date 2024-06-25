import { existsSync } from 'node:fs'
import path from 'node:path'

import fs from 'fs/promises'

import { generateFakeData } from './generateFakeData'

// Gera dados pelo faker.js e os armazena em 'db.json', presente na pasta 'data'.
export async function writeDataToDB() {
  const fakeData = await generateFakeData()

  if (fakeData) {
    const readableFakeData = JSON.stringify(fakeData, null, 2)
    const dataDirectory = path.resolve('src/data')
    const filePath = path.join(dataDirectory, 'db.json')

    try {
      await fs.mkdir(dataDirectory, { recursive: true })

      if (existsSync('db.json')) {
        await fs.writeFile(filePath, readableFakeData)
        console.log('Data written to db.json successfully')
      }
    } catch (error) {
      console.error('Failed to write data to db.json:', error)
    }
  }
}
