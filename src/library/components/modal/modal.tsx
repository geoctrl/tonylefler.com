import {
  ParentProps,
  mergeProps,
  Show,
  createEffect,
  createSignal,
  onCleanup,
} from "solid-js";
import { Portal } from "solid-js/web";
import anime from "animejs/lib/anime.es";
import {
  animeOnComplete,
  getTransformMatrix,
} from "../../../utils/anime-utils";
import { ModalContext } from "./modal-context";
import { always } from "../../../utils/classname-helpers";

const animateOpts = {
  easing: "easeOutSine",
  duration: 250,
};

type Props = ParentProps<{
  show?: boolean;
  onClose?: () => void;
  allowBackdropClose?: boolean;
}>;

const defaultProps: Partial<Props> = {
  show: false,
  allowBackdropClose: true,
};

export const Modal = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const [isOpen, setIsOpen] = createSignal(props.show);

  let backdropRef: HTMLDivElement | undefined = undefined;
  let cardRef: HTMLDivElement | undefined = undefined;

  createEffect(() => {
    if (props.show) {
      setIsOpen(true);
    } else {
      Promise.all([
        animeOnComplete({
          targets: backdropRef,
          opacity: 0,
          ...animateOpts,
        }),
        animeOnComplete({
          targets: cardRef,
          opacity: 0,
          ...animateOpts,
          translateY: (el: HTMLDivElement) => {
            const [, , , , , y] = getTransformMatrix(el);
            return [y, 50];
          },
        }),
      ]).then(() => {
        setIsOpen(false);
      });
    }
  });

  createEffect(() => {
    if (isOpen()) {
      anime({
        targets: backdropRef,
        opacity: 1,
        ...animateOpts,
      });
      anime({
        targets: cardRef,
        opacity: 1,
        ...animateOpts,
        translateY: [50, 0],
      });
    }
  });

  onCleanup(() => {
    props.onClose?.();
  });

  return (
    <ModalContext.Provider value={{ onClose: props.onClose }}>
      <Portal>
        <Show when={isOpen()}>
          <div
            class="fixed inset-0 flex items-center justify-center"
            style={{ perspective: "200px" }}
          >
            <div
              ref={backdropRef}
              class="absolute inset-0 z-0 bg-raisin-500/50 opacity-0"
              onClick={() => {
                if (props.allowBackdropClose) {
                  props.onClose?.();
                }
              }}
            />
            <div
              ref={cardRef}
              class={always(
                "relative z-10 w-112 rounded-xl bg-grey-100 opacity-0 shadow-lg",
                "dark:bg-raisin-400",
              )}
            >
              {props.children}
            </div>
          </div>
        </Show>
      </Portal>
    </ModalContext.Provider>
  );
};
