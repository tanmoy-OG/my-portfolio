// api route for achievements using mongoose, next.js and typescript using axios, where the GET request fetches all achievements and the POST request creates a new achievement

import { NextRequest, NextResponse } from 'next/server'

import connect from '@/lib/db-connect'
import Achievement from '@/models/achievements'

connect()

export async function GET() {
  // console.log('GET request')
  try {
    const achievements = await Achievement.find({})
    const response = NextResponse.json({ success: true, data: achievements })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function POST(request: NextRequest) {
  // console.log('POST request')
  try {
    const { name, link, date } = await request.json()
    // console.log('name', name)
    // console.log('link', link)
    // console.log('date', date)

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

export async function PUT(request: NextRequest) {
  // console.log('PUT request')
  try {
    const { id, name, link, date } = await request.json()
    // console.log('id', id)
    // console.log('name', name)
    // console.log('link', link)
    // console.log('date', date)

    if (!id) {
      const response = NextResponse.json({
        success: false,
        error: 'ID is required'
      })
      return response
    }

    const achievement = await Achievement.findByIdAndUpdate(
      id,
      { name, link, date },
      { new: true }
    )
    const response = NextResponse.json({ success: true, data: achievement })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function DELETE(request: NextRequest) {
  // console.log('DELETE request')
  try {
    //* use this api route in client side axios hook `/api/your-endpoint?id=${id}`
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    // console.log('id', id)

    const achievement = await Achievement.findByIdAndDelete(id)
    const response = NextResponse.json({ success: true, data: achievement })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
