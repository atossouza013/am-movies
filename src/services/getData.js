

import api from "./api"

export const getPopularMovies = async () => {
  const { data } = await api.get("/movie/popular")
  return data.results
}

export const getTopRatedMovies = async () => {
  const { data } = await api.get("/movie/top_rated")
  return data.results
}

export const getUpcomingMovies = async () => {
  const { data } = await api.get("/movie/upcoming")
  return data.results
}

export const getTopSeries = async () => {
  const { data } = await api.get("/tv/top_rated")
  return data.results
}

export const getPopularSeries = async () => {
  const { data } = await api.get("/tv/popular")
  return data.results
}

export const getOnTheAirSeries = async () => {
  const { data } = await api.get("/tv/on_the_air")
  return data.results
}

export const getPerson = async () => {
  const { data } = await api.get("/person/popular")
  return data.results
}

export const getDetails = async (type, id) => {
  const { data } = await api.get(`/${type}/${id}`)
  return data
}

export const getVideos = async (type, id) => {
  const { data } = await api.get(`/${type}/${id}/videos`)
  return data.results
}

export const getCredits = async (type, id) => {
  const { data } = await api.get(`/${type}/${id}/credits`)
  return data.cast
}

export const getSimilar = async (type, id) => {
  const { data } = await api.get(`/${type}/${id}/similar`)
  return data.results
}

export const searchMovies = async (query) => {
  const { data } = await api.get("/search/multi", {
    params: { query }
  })
  return data.results
}


export async function getPersonDetails(id) {
  const { data } = await api.get(`/person/${id}`)
  return data
}

export async function getPersonCredits(id) {
  const { data } = await api.get(`/person/${id}/combined_credits`)
  return data.cast
}