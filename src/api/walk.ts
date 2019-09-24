import axios from 'axios';
import { Walk } from '@types';


const base = 'http://localhost:3000';

export async function getWalks() {
  return (await axios.get(`${base}/walking`)).data as Walk[];
}

export async function getWalk(id: string) {
  return (await axios.get(`${base}/walking/${id}`)).data as Walk;
}

export async function addWalk(walk: Walk) {
  return (await axios.post(`${base}/walking/`, walk)).data as Walk;
}

export async function updateWalk(id: number, walk: Walk) {
  return (await axios.put(`${base}/walking/${id}`, walk)).data as Walk;
}

export async function removeWalk(id: number) {
  return (await axios.delete(`${base}/walking/${id}`)).data as Walk;
}
