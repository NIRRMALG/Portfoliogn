import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'Nirrmal Resume.pdf')
    const fileBuffer = await fs.promises.readFile(filePath)
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(fileBuffer)
        controller.close()
      },
    })
    return new NextResponse(stream, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Nirrmal Resume.pdf"',
      },
    })
  } catch (err) {
    return new NextResponse('Resume not found', { status: 404 })
  }
}
