import { NextRequest, NextResponse } from 'next/server'

import connect from '@/lib/db-connect'
import Project from '@/models/projects'

connect()

export async function GET(request: NextRequest) {
  console.log('GET request')
  try {
    const url = new URL(request.url)
    const type = url.searchParams.get('type')
    console.log('type', type)
    if (type === 'all') {
      const projects = await Project.find({})
      const response = NextResponse.json({ success: true, data: projects })
      return response
    }
    const projects = await Project.find({ top: true })
    const response = NextResponse.json({ success: true, data: projects })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function POST(request: NextRequest) {
  console.log('POST request')
  try {
    const { image, date, title, description, features, techStack, top }: any =
      await request.json()

    if (!image || !date || !title || !description || !features || !techStack) {
      console.log('image', image)
      console.log('date', date)
      console.log('title', title)
      console.log('description', description)
      console.log('features', features)
      console.log('techStack', techStack)
      return NextResponse.json({
        success: false,
        error: 'All fields are required'
      })
    }

    const project = await Project.create({
      image,
      date,
      title,
      description,
      features,
      techStack,
      top
    })
    const response = NextResponse.json({ success: true, data: project })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
