// lib/prismaService.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOffer = async (offerData) => {
  try {
    const offer = await prisma.offer.create({
      data: offerData,
    });
    return offer;
  } catch (error) {
    throw new Error(`Error creating offer: ${error.message}`);
  }
};
