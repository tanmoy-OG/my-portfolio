import { NextRequest, NextResponse } from 'next/server';

import connect from '@/lib/mongodb';
import Skill from '@/models/skills';

connect();

export async function GET() {
  try {
    const skills = await Skill.find();
    const response = NextResponse.json({ data: skills }, { status: 200 });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching skills', error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    if (!name) {
      return NextResponse.json(
        { message: 'Skill name is required' },
        { status: 400 }
      );
    }
    const skill = await Skill.create({ name });
    const response = NextResponse.json({ data: skill }, { status: 201 });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating skill', error },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, name } = await request.json();
    if (!id || !name) {
      return NextResponse.json(
        { message: 'Skill ID and name are required' },
        { status: 400 }
      );
    }

    const skill = await Skill.findByIdAndUpdate(id, { name }, { new: true });
    const response = NextResponse.json({ data: skill }, { status: 200 });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating skill', error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json(
        { message: 'Skill ID is required' },
        { status: 400 }
      );
    }

    const skill = await Skill.findByIdAndDelete(id);
    const response = NextResponse.json({ data: skill }, { status: 200 });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: 'Error deleting skill', error },
      { status: 500 }
    );
  }
}
