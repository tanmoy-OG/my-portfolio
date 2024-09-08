import { NextRequest, NextResponse } from 'next/server'

import connect from '@/lib/db-connect'
import Experience from '@/models/experience'

connect()

export async function GET(request: NextRequest) {
  // console.log('GET request')
  try {
    const url = new URL(request.url)
    const type = url.searchParams.get('type')
    // console.log('type', type)
    if (type === 'all') {
      const experience = await Experience.find({})
      const response = NextResponse.json({ success: true, data: experience })
      return response
    }
    const experience = await Experience.find({ top: true })
    const response = NextResponse.json({ success: true, data: experience })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function POST(request: NextRequest) {
  // console.log('POST request')
  try {
    const {
      startDate,
      endDate,
      company,
      companyLink,
      freelanceSite,
      position,
      myContribution,
      productsLink,
      techStack,
      present,
      top
    }: any = await request.json()
    // console.log('startDate', startDate)
    // console.log('endDate', endDate)
    // console.log('company', company)
    // console.log('companyLink', companyLink)
    // console.log('freelanceSite', freelanceSite)
    // console.log('position', position)
    // console.log('myContribution', myContribution)
    // console.log('productsLink', productsLink)
    // console.log('techStack', techStack)
    // console.log('present', present)
    // console.log('top', top)

    if (!startDate || !company || !position || !myContribution || !techStack) {
      return NextResponse.json({
        success: false,
        error: 'All fields are required'
      })
    }

    if (present === 'true' && endDate === '') {
      const getOne = await Experience.findOne({ present: true })
      if (getOne) {
        getOne.present = false
        getOne.endDate = new Date().toString()
        await getOne.save()
      }
    }

    const experience = await Experience.create({
      startDate,
      endDate,
      company,
      companyLink,
      freelanceSite,
      position,
      myContribution,
      productsLink,
      techStack,
      present,
      top
    })
    const response = NextResponse.json({ success: true, data: experience })
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
      startDate,
      endDate,
      company,
      companyLink,
      freelanceSite,
      position,
      myContribution,
      productsLink,
      techStack,
      present,
      top
    }: any = await request.json()
    // console.log('startDate', startDate)
    // console.log('endDate', endDate)
    // console.log('company', company)
    // console.log('companyLink', companyLink)
    // console.log('freelanceSite', freelanceSite)
    // console.log('position', position)
    // console.log('myContribution', myContribution)
    // console.log('productsLink', productsLink)
    // console.log('techStack', techStack)
    // console.log('present', present)
    // console.log('top', top)

    if (!id) {
      const response = NextResponse.json({
        success: false,
        error: 'ID is required'
      })
      return response
    }

    const experience = await Experience.findByIdAndUpdate(
      id,
      {
        startDate,
        endDate,
        company,
        companyLink,
        freelanceSite,
        position,
        myContribution,
        productsLink,
        techStack,
        present,
        top
      },
      { new: true }
    )
    const response = NextResponse.json({ success: true, data: experience })
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

    const experience = await Experience.findByIdAndDelete(id)
    const response = NextResponse.json({ success: true, data: experience })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
