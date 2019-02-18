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
                        @error="updateErrors('name', $event)"
                        v-model="user.name">
                    </input-string>

                    <input-email
                        :label="labels.email"
                        @error="updateErrors('email', $event)"
                        v-model="user.email">
                    </input-email>

                    <input-password
                        :label="labels.password"
                        :required="true"
                        @error="updateErrors('password', $event)"
                        v-model="user.password">
                    </input-password>
                    
                    <clear-button @click="clear()" :label="labels.clearButton"></clear-button>
                    <save-button @click="create()" :label="labels.saveButton"></save-button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>

import InputEmail from "@/components/forms/InputEmail.vue";
import InputString from "@/components/forms/InputString.vue";
import InputPassword from "@/components/forms/InputPassword.vue";
import ClearButton from "@/components/forms/ClearButton.vue";
import SaveButton from "@/components/forms/SaveButton.vue";

export default {
  name: "UsersForm",
  components: {
    InputEmail,
    InputString,
    InputPassword,
    ClearButton,
    SaveButton
  },
  data() {
      return {
          labels: {
              name: 'Name',
              email: 'E-mail Address',
              password: 'Password',
              saveButton: 'Create',
              clearButton: 'Clear',
          },
          errors: {
              email: true,
              name: true,
              password: true,
          },
          user: {
              email: null,
              name: null,
              password: null
          }
      }
  },
  methods: {
        clear: function () {
            for (let field in this.user) {
                this.user[field] = null;
                this.errors[field] = true;
            }
        },
        create: function () {
            // Create POST to endpoint

            // Redirect if the response is ok
            this.$router.push({
                name:'users-list'
            });
        },
        updateErrors: function (key, value) {
            this.errors[key] = value;

            this.$emit('errors', this.errors);
        }
    }
}

</script>