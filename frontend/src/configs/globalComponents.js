import LayoutEmptyGlobal from '@/Layout/Wrappers/emptyLayout.vue';
import LayoutDefaultGlobal from '@/Layout/Wrappers/loggedLayout.vue';
import LayoutLoginGlobal from '@/Layout/Wrappers/loginLayout.vue';

import FormGlobal from '@/components/base/FormGlobal.vue';
import ButtonGlobal from '@/components/base/ButtonGlobal.vue';

export default {
  install(app) {
    app.component('LayoutEmpty', LayoutEmptyGlobal);
    app.component('LayoutDefault', LayoutDefaultGlobal);
    app.component('LayoutLoginGlobal', LayoutLoginGlobal);
    
    app.component('BFormGlobal', FormGlobal);
    app.component('BButtonGlobal', ButtonGlobal);
  }
};