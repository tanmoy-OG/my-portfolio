// api route for skills using mongoose, next.js and typescript using axios, where the GET request fetches all skills and the POST request creates a new skill

import { NextRequest, NextResponse } from 'next/server'

import connect from '@/lib/db-connect'
import Skill from '@/models/skills'

connect()

export async function GET() {
  console.log('GET request')
  try {
    const skills = await Skill.find({})
    const response = NextResponse.json({ success: true, data: skills })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function POST(request: NextRequest) {
  console.log('POST request')
  try {
    const { name } = await request.json()
    console.log('name', name)

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
