<script>
import { PopperWrapper } from 'floating-vue';

export default {
  ...PopperWrapper,
  name: 'Dropdown',
  vPopperTheme: 'default-dropdown',
};
</script>

<style>
.v-popper--theme-default-dropdown .v-popper__wrapper {
  margin: 0 2rem 0 2rem;
}

.v-popper--theme-default-dropdown .v-popper__inner {
  background: #27272a;
  color: #ffffff;
  padding: 24px;
  border: 0;
  outline: 1px solid #3f3f46;
  border-radius: 24px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.v-popper--theme-default-dropdown .v-popper__inner:hover {
  border: 0;
  outline: 2px solid #3f3f46;
  box-shadow: '0 35px 60px 0 rgba(0, 0, 0, 0.3)';
}

.v-popper--theme-default-dropdown .v-popper__arrow-inner {
  border: 0;
}

.v-popper--theme-default-dropdown .v-popper__arrow-outer {
  border-color: #3f3f46;
}
</style>
