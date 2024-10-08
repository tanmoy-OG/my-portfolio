import { NextRequest, NextResponse } from 'next/server'

import connect from '@/lib/db-connect'
import Project from '@/models/projects'

connect()

export async function GET(request: NextRequest) {
  // console.log('GET request')
  try {
    const url = new URL(request.url)
    const type = url.searchParams.get('type')
    // console.log('type', type)
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
  // console.log('POST request')
  try {
    const { image, date, title, description, features, techStack, top }: any =
      await request.json()
    // console.log('image', image)
    // console.log('date', date)
    // console.log('title', title)
    // console.log('description', description)
    // console.log('features', features)
    // console.log('techStack', techStack)
    // console.log('top', top)

    if (!image || !date || !title || !description || !features || !techStack) {
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

export async function PUT(request: NextRequest) {
  // console.log('PUT request')
  try {
    const {
      id,
      image,
      date,
      title,
      description,
      features,
      techStack,
      top
    }: any = await request.json()
    // console.log('id', id)
    // console.log('image', image)
    // console.log('date', date)
    // console.log('title', title)
    // console.log('description', description)
    // console.log('features', features)
    // console.log('techStack', techStack)
    // console.log('top', top)

    if (!id) {
      const response = NextResponse.json({
        success: false,
        error: 'ID is required'
      })
      return response
    }

    const project = await Project.findByIdAndUpdate(
      id,
      {
        image,
        date,
        title,
        description,
        features,
        techStack,
        top
      },
      { new: true }
    )
    const response = NextResponse.json({ success: true, data: project })
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

    const project = await Project.findByIdAndDelete(id)
    const response = NextResponse.json({ success: true, data: project })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
