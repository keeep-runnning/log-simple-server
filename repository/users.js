import db from "../db.js";

export async function findById(id) {
  return await db.user.findUnique({ where: { id } });
}

export async function findByUsername(username) {
  return await db.user.findUnique({ where: { username } });
}

export async function findByEmail(email) {
  return await db.user.findUnique({ where: { email } });
}

export async function create({ username, email, password }) {
  await db.user.create({
    data: { username, email, password },
  });
}

export async function updateUsername({ id, newUsername }) {
  await db.user.update({
    where: { id },
    data: {
      username: newUsername,
    },
  });
}

export async function updateShortIntroduction({ id, newShortIntroduction }) {
  await db.user.update({
    where: { id },
    data: {
      shortIntroduction: newShortIntroduction,
    },
  });
}

export async function updateIntroduction({ id, newIntroduction }) {
  await db.user.update({
    where: { id },
    data: {
      introduction: newIntroduction,
    },
  });
}

export async function updatePassword({ id, newPassword }) {
  await db.user.update({
    where: { id },
    data: {
      password: newPassword,
    },
  });
}
