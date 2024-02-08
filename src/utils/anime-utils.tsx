import { AnimeParams } from "animejs";
import anime from "animejs/lib/anime.es";

export function animeOnComplete(animeParams: AnimeParams) {
  return new Promise((resolve) => {
    anime({
      ...animeParams,
      complete: resolve,
    });
  });
}

export function getTransformMatrix(el: HTMLElement): string[] {
  const matrix = getComputedStyle(el).transform;
  const regex = /-?\d+(\.\d+)?/g;
  return matrix.match(regex) || [];
}
