import type { TOC } from '@ember/component/template-only';

export const Text: TOC = <template>
  <span class="text">{{yield}}</span>
</template>;

export default Text;
