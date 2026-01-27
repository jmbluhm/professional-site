import { NextResponse } from 'next/server'
import { getJSONResume } from '@/lib/jsonResume'

export async function GET() {
  const { resume, validation } = getJSONResume()

  if (!validation.valid) {
    return NextResponse.json(
      {
        error: 'JSON Resume validation failed',
        details: validation.errors,
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    )
  }

  return new NextResponse(JSON.stringify(resume, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
