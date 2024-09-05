// api route for achievements using mongoose, next.js and typescript using axios, where the GET request fetches all achievements and the POST request creates a new achievement

import { NextRequest, NextResponse } from 'next/server'

import connect from '@/lib/db-connect'
import Achievement from '@/models/achievements'

connect()

export async function GET() {
  console.log('GET request')
  try {
    const achievements = await Achievement.find({})
    const response = NextResponse.json({ success: true, data: achievements })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function POST(request: NextRequest) {
  console.log('POST request')
  try {
    const { name, link, date } = await request.json()
    console.log('name', name)
    console.log('link', link)
    console.log('date', date)

    if (!name || !link || !date) {
      return NextResponse.json({
        success: false,
        error: 'Name, date and description are required'
      })
    }

    const achievement = await Achievement.create({ name, link, date })
    const response = NextResponse.json({ success: true, data: achievement })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
