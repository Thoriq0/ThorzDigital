import { NextResponse } from "next/server";

function sanitize(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validateContactPayload(payload) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!payload.name) {
    errors.name = "Nama wajib diisi.";
  }

  if (!payload.email) {
    errors.email = "Email wajib diisi.";
  } else if (!emailPattern.test(payload.email)) {
    errors.email = "Format email belum valid.";
  }

  if (!payload.businessName) {
    errors.businessName = "Nama bisnis wajib diisi.";
  }

  if (!payload.projectNeeds) {
    errors.projectNeeds = "Kebutuhan project wajib diisi.";
  }

  if (!payload.message) {
    errors.message = "Pesan wajib diisi.";
  }

  return errors;
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Body request tidak valid.",
      },
      { status: 400 },
    );
  }

  const payload = {
    name: sanitize(body?.name),
    email: sanitize(body?.email),
    businessName: sanitize(body?.businessName),
    projectNeeds: sanitize(body?.projectNeeds),
    message: sanitize(body?.message),
  };

  const errors = validateContactPayload(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        success: false,
        message: "Masih ada field yang perlu dilengkapi.",
        errors,
      },
      { status: 400 },
    );
  }

  const leadId = `AR-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json({
    success: true,
    message:
      "Permintaan konsultasi kamu sudah kami terima. Tim kami akan menghubungi kamu secepatnya.",
    leadId,
    submittedAt: new Date().toISOString(),
  });
}
