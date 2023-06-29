<script setup>
import { inject } from 'vue';
import Button from '../atoms/Button.vue';
import CheckPermissionVue from '../atoms/CheckPermission.vue';

const props = defineProps({ show: Boolean });

const formConfigInjected = inject('formOptions');

const emit = defineEmits({
  modalFormSubmit: (payload) => {
    if (!Object.values(payload).includes(null)) return true;
    return false;
  }
})

function submitModalForm(event) {
  const eTarget = event.target;
  const payload = {};

  formConfigInjected.formFields.forEach(function(field) {
    return payload[field] = eTarget.elements[field]?.value;
  })

  // console.log('formulário enviado...', payload);
  try { 
    emit('modalFormSubmit', payload);
  } catch (err) {
    alert("Erro no envio dos dados, por favor, preecha o formulário corretamente", '\n', err);
    return false;
  }

  alert('Obrigado 🚀');
  emit('close');

  return true;
}
</script>

<template>
  <div id="modal__form" @submit.prevent="submitModalForm">
    <form action="#">
      <div v-if="formConfigInjected.formFields.includes('username')" class="form-group">
        <label for="#usermane">Nome: </label>
        <input type="text" name="username" id="username" maxlength="64" minlength="4" required>
      </div>
      
      <div v-if="formConfigInjected.formFields.includes('email')" class="form-group">
        <label for="#email">E-mail: </label>
        <input type="email" name="email" id="email" maxlength="64" minlength="8" required>
      </div>

      <div v-if="formConfigInjected.formFields.includes('phone')" class="form-group">
        <label for="#phone">Telefone: </label>
        <input type="phone" name="phone" id="phone" maxlength="13" minlength="8" required>
      </div>

      <div v-if="formConfigInjected.formFields.includes('gender')" class="form-group">
        <label for="#gender">Genêro: </label>

        <select id="gender">
          <option disabled selected value="default">gênero</option>
          <option value="masc">masculino</option>
          <option value="fem">feminino</option>
          <option value="other">outro</option>
        </select>
      </div>

      <div id="submitBtnWrapper" class="form-group">
        <CheckPermissionVue 
        v-if="formConfigInjected.formPermission"
        id="permission"
        labelText="Você permite o uso de seus dados?" 
        size="sm"
        ></CheckPermissionVue>

        <Button id="submitBtn" role="submit" text="Enviar" fontSize="0.8rem"></Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  #modal__form {
    margin-top: 1rem;
  }

  form {
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: left; 
  }
  .form-group {
    flex-grow: 1;
    flex-shrink: 1;
    width: auto;
    min-width: 50%;
    text-align: left;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  }

  .form-group input, .form-group label {
    margin-right: 0.5rem;
  }

  label {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 300;
    color: var(--text__color);
    min-width: 8ch;
  }

  #submitBtnWrapper{
    width: 100%;
    display: flex;
  }
  #submitBtnWrapper #permission {
    margin-right: auto;
    text-align: left;
  }
  #submitBtnWrapper #submitBtn {
    margin-left: auto;
    text-align: right;
  }
</style>