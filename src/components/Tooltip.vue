<script>
import { PopperWrapper } from 'floating-vue';

export default {
  ...PopperWrapper,
  name: 'Tooltip',
  vPopperTheme: 'default-tooltip',
};
</script>

<style>
button[data-popper-shown] {
  background: white;
}

.v-popper--theme-default-tooltip .v-popper__wrapper {
  margin: 0 2rem 0 2rem;
}

.v-popper--theme-default-tooltip .v-popper__inner {
  background: #27272a;
  color: #ffffff;
  outline: 1px solid #52525b;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}

.v-popper--theme-default-tooltip .v-popper__arrow-inner {
  border-color: #27272a;
}

.v-popper--theme-default-tooltip .v-popper__arrow-outer {
  border-color: #52525b;
}
</style>
