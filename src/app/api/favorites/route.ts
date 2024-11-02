import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

export async function POST(request: Request) {
  try {
    const favorites = await request.json();
    
    const client = await clientPromise;
    const db = client.db("FvoritosRM"); // Reemplaza con el nombre de tu base de datos
    
    // Guarda los favoritos en la colección
    const result = await db.collection("favoritos").insertOne({
      favorites: favorites,
      createdAt: new Date()
    });

    return NextResponse.json({ 
      message: "Favoritos guardados exitosamente",
      success: true,
      data: result 
    });

  } catch (error) {
    console.error('Error al guardar favoritos:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}