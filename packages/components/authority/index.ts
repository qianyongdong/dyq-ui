import { defineComponent, h, computed } from 'vue-demi';
import { getAuth } from '@dyq-ui/utils';

interface AuthorityProps {
  permission: string | string[];
}

export const authorityProps = ['permission'] as const;

export const DAuthority = defineComponent<AuthorityProps>({
  name: 'DAuthority',
  props: authorityProps as unknown as any,
  setup(props, { slots }) {
    const permissions = getAuth();

    const showSlot = computed(() => {
      if (!props.permission) {
        return true;
      }
      if (!permissions) {
        return false;
      }
      if (Array.isArray(props.permission)) {
        return props.permission.every((p) => permissions.includes(p));
      } else {
        return permissions.includes(props.permission);
      }
    });
    if (slots.default) {
      slots.default({ userPermissions: permissions });
    }
    return () => (showSlot.value && slots.default ? h(slots.default) : null);
  },
});

export default DAuthority;
