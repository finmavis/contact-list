import axios from 'axios';

export const getAllContact = async () => {
  const res = await axios.get(
    'https://simple-contact-crud.herokuapp.com/contact',
  );
  return res.data.data;
};

export const getSingleContact = async id => {
  const res = await axios.get(
    `https://simple-contact-crud.herokuapp.com/contact/${id}`,
  );
  return res.data.data;
};

export const postToAPI = async data => {
  if (data.photo === '') {
    data.photo = 'N/A';
  }
  const res = await axios.post(
    'https://simple-contact-crud.herokuapp.com/contact',
    data,
  );
  return res;
};

export const putToAPI = async (id, data) => {
  if (data.photo === '') {
    data.photo = 'N/A';
  }
  const res = await axios.put(
    `https://simple-contact-crud.herokuapp.com/contact/${id}`,
    data,
  );
  return res;
};

export const handleDeleteToAPI = async id => {
  try {
    await axios.delete(
      `https://simple-contact-crud.herokuapp.com/contact/${id}`,
    );
    return { id };
  } catch (e) {
    throw new Error(e);
  }
};
