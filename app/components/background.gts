import type { TOC } from '@ember/component/template-only';

export const Background: TOC = <template>
  <div class="background">
    <div class="background-circle"></div>
  </div>
  {{yield}}
</template>;

export default Background;
