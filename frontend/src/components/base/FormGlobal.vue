<template>
  <div>
    <rkm-row v-if="showLegend">
      <rkm-col>
        <rkm-alert color="warning">
          <span>* Preenchimento obrigatório.</span>
        </rkm-alert>
      </rkm-col>
    </rkm-row>

    <rkm-row>
      <rkm-col>
        <Form
          ref="form"
          @submit="onSubmit"
          @reset="reset"
        >
          <b-form>
            <slot />
          </b-form>
        </Form>
      </rkm-col>
    </rkm-row>
  </div>
</template>

<script>
import { BForm } from 'bootstrap-vue-next';
import { Form } from 'vee-validate';

export default {
  name: 'FormGlobal',
  components: { BForm, Form },
  props: {
    showLegend: {
      type: Boolean,
      default: false,
    },
    validateOnSubmit: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['success'],
  methods: {
    async onSubmit(values, { resetForm }) {
      try {
        this.$emit('success', values);
        // Opcional: Chame resetForm se desejar resetar o formulário após o sucesso
        resetForm();
      } catch (error) {
        console.error('Erro ao submeter:', error);
        this.scrollToFirstInvalidField();
      }
    },
    async validate(callbackOnSuccess) {
      const valid = await this.$refs.form.validate();
      if (valid) {
        if (typeof callbackOnSuccess === 'function') {
          callbackOnSuccess();
        }
      } else {
        this.scrollToFirstInvalidField();
      }
      return valid;
    },
    reset() {
      this.$refs.form.resetForm();
    },
    scrollToFirstInvalidField() {
      const firstInvalidField = document.querySelector('.is-invalid');
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>