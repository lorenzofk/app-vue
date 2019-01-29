<template>
    <div>
        <div class="row justify-content-center align-items-center">
            <h3>Create a new user</h3>    
        </div>
        <hr/>
        <div class="row justify-content-center align-items-center h-100">
            <div class="col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <form>

                    <input-string
                        :label="labels.name"
                        :minLength="3"
                        v-on:error="updateErrors('name', $event)"
                        v-model="user.name">
                    </input-string>

                    <input-email
                        :label="labels.email"
                        v-on:error="updateErrors('email', $event)"
                        v-model="user.email">
                    </input-email>
                    
                    <button type="button" class="btn btn-space btn-secondary">Clear</button>
                    <button type="button" class="btn btn-space btn-primary">Create</button>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import InputEmail from "@/components/forms/InputEmail.vue";
import InputString from "@/components/forms/InputString.vue";

export default {
  name: "UsersForm",
  components: {
    InputEmail,
    InputString
  },
  data() {
      return {
          labels: {
              name: 'Nome',
              email: 'Endereço de E-mail'
          },
          errors: {
              name: false,
              email: false,
          },
          user: {
              email: null,
              name: null,
          }
      }
  },
  methods: {
        updateErrors: function (key, value) {
            this.errors[key] = value;

            this.$emit('errors', this.errors);
        }
    }
}

</script>

<style scoped>
    .btn-space {
        margin-right: 5px;
    }
</style>