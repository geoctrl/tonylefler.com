import { Button } from "../../../library/button/button";
import { Icon } from "../../../library/icon/icon";

export const ButtonPage = () => {
  return (
    <div class="p-8">
      <h2>Buttons</h2>
      <p>This is a test</p>
      <div class="mb-4">
        <div>size</div>
        <div class="flex items-center gap-2">
          <Button
            size="sm"
            iconRight="caret-down-solid"
            iconLeft="arrow-left-regular"
          >
            Medium
          </Button>
          <Button
            size="md"
            iconRight="caret-down-solid"
            iconLeft="arrow-left-regular"
          >
            Medium
          </Button>
          <Button
            size="lg"
            iconRight="caret-down-solid"
            iconLeft="arrow-left-regular"
          >
            Medium
          </Button>
        </div>
      </div>
      <div class="mb-4">
        <div>variants</div>
        <div class="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondaryColor">Secondary Color</Button>
          <Button variant="border">Border</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="listItem">List Item</Button>
        </div>
      </div>
      <div class="mb-4">
        <div>active</div>
        <div class="flex gap-2">
          <Button variant="primary" active>
            Primary
          </Button>
          <Button variant="secondary" active>
            Secondary
          </Button>
          <Button variant="secondaryColor" active>
            Secondary Color
          </Button>
          <Button variant="border" active>
            Border
          </Button>
          <Button variant="tertiary" active>
            Tertiary
          </Button>
        </div>
      </div>
      <div class="mb-4">
        <h3>icons</h3>
        <p>pass icon names</p>
        <div class="mb-2 flex items-center gap-2">
          <Button iconLeft="arrow-left-regular">iconLeft</Button>
          <Button iconRight="caret-down-solid">iconRight</Button>
        </div>
        <p>pass in icon objects</p>
        <div class="flex gap-2">
          <Button
            iconLeft={{
              name: "face-awesome-regular",
              class: "text-warning-500 rotate-[45deg]",
            }}
          >
            iconLeftProps
          </Button>
          <Button
            iconRight={{
              name: "caret-down-solid",
              class: "rotate-[155deg] fill-primary-500",
            }}
          >
            iconRightProps
          </Button>
        </div>
      </div>
      <div class="mb-4">
        <h3>iconOnly</h3>
        <div class="flex gap-2">
          <Button iconOnly="face-awesome-regular" size="sm" />
          <Button iconOnly="face-awesome-regular" size="md" />
          <Button iconOnly="face-awesome-regular" size="lg" />
        </div>
      </div>
      <div class="mb-4">
        <h3>block</h3>
        <Button block class="mb-2">
          block
        </Button>
      </div>
      <div class="mb-4">
        <h3>block + alignContent</h3>
        <p>Center is default</p>
        <Button
          block
          alignContent="center"
          class="mb-2"
          iconLeft="arrow-left-regular"
          iconRight="caret-down-solid"
        >
          center
        </Button>
        <Button
          block
          alignContent="left"
          class="mb-2"
          iconLeft="arrow-left-regular"
          iconRight="caret-down-solid"
        >
          left
        </Button>
        <Button
          block
          alignContent="right"
          iconLeft="arrow-left-regular"
          iconRight="caret-down-solid"
        >
          right
        </Button>
      </div>
      <div class="mb-4">
        <h3>block + custom</h3>
        <p>Pass in custom layouts as well - it's just flex</p>
        <Button block>
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center gap-2">
              <Icon name="arrow-left-regular" class="size-4" />
              Super
            </div>
            <Icon name="caret-down-solid" class="size-4" />
          </div>
        </Button>
      </div>
    </div>
  );
};
