<script setup>
import Button from '../atoms/Button.vue';

const props = defineProps({ show: Boolean });

const emit = defineEmits({
  modalFormSubmit: ({username, email, phone, gender}) => {
    if (!username || !email || !phone) return false;
    return true;
  }
})

function submitModalForm(event) {
  const eTarget = event.target;

  const payload = {
    username: eTarget.elements.username?.value,
    email: eTarget.elements.email?.value,
    phone: eTarget.elements.phone?.value,
    gender: eTarget.elements.gender?.value,
  }

  console.log(payload);
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
      <div class="form-group">
        <label for="#usermane">Nome: </label>
        <input type="text" name="username" id="username" maxlength="64" minlength="4" required>
      </div>
      
      <div class="form-group">
        <label for="#email">E-mail: </label>
        <input type="email" name="email" id="email" maxlength="64" minlength="8" required>
      </div>

      <div class="form-group">
        <label for="#phone">Telefone: </label>
        <input type="phone" name="phone" id="phone" maxlength="13" minlength="8" required>
      </div>

      <div class="form-group">
        <label for="#gender">Genêro: </label>

        <select id="gender">
          <option disabled selected value="default">gênero</option>
          <option value="masc">masculino</option>
          <option value="fem">feminino</option>
          <option value="other">outro</option>
        </select>
      </div>

      <div id="submitBtnWrapper" class="form-group">
        <Button role="submit" text="Enviar" fontSize="0.8rem"></Button>
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
  }
  #submitBtnWrapper > * {
    margin-left: auto;
    text-align: right;
  }
</style>