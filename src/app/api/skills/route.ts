// api route for skills using mongoose, next.js and typescript using axios, where the GET request fetches all skills and the POST request creates a new skill

import { NextRequest, NextResponse } from 'next/server'

import connect from '@/lib/db-connect'
import Skill from '@/models/skills'

connect()

export async function GET() {
  // console.log('GET request')
  try {
    const skills = await Skill.find({})
    const response = NextResponse.json({ success: true, data: skills })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function POST(request: NextRequest) {
  // console.log('POST request')
  try {
    const { name } = await request.json()
    // console.log('name', name)

    if (!name) {
      return NextResponse.json({
        success: false,
        error: 'Name is required'
      })
    }

    const skill = await Skill.create({ name })
    const response = NextResponse.json({ success: true, data: skill })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function PUT(request: NextRequest) {
  // console.log('PUT request')
  try {
    const { id, name } = await request.json()
    // console.log('id', id)
    // console.log('name', name)

    if (!id) {
      const response = NextResponse.json({
        success: false,
        error: 'ID is required'
      })
      return response
    }

    const skill = await Skill.findByIdAndUpdate(id, { name }, { new: true })
    const response = NextResponse.json({ success: true, data: skill })
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

    const skill = await Skill.findByIdAndDelete(id)
    const response = NextResponse.json({ success: true, data: skill })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
