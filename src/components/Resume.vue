<template>

    <div>   
        
        <div class="row header">
            <div class="col-md-4">
                <h4 class="name"> {{ person.name }} </h4>
                <h5 class="job-title"> {{ person.jobTitle }} </h5>
            </div>
            <div class="col-md-3 offset-md-4">
                <span v-if="person.city && person.country"> 
                    <strong>Location: </strong> {{ person.city }}, {{ person.country }} 
                </span>
                <br>
                <span v-if="person.phoneNumber"> 
                    <strong>Contact: </strong> {{ person.phoneNumber }} 
                </span>
                <br>
                <span v-if="person.email">
                    <strong>E-mail: </strong> {{ person.email }} 
                </span>
            </div>
        </div>
        <hr>
        <div class="row profile">
            <div class="col-md-4">
                <h5> PROFILE </h5>
            </div>
            <div v-if="profile" class="col-md-12">
                <p v-html="profile"></p>
            </div>
        </div>
        <hr>

        <div class="row">
            <div class="col-md-4">

                <input-string
                    :label="'Name'"
                    :minLength="3"
                    v-model="person.name">
                </input-string>

                <input-email
                    :label="'E-mail'"
                    v-model="person.email">
                </input-email>

                <input-string
                    :label="'Job Title'"
                    :minLength="3"
                    v-model="person.jobTitle">
                </input-string>

                <input-string
                    :label="'City'"
                    :minLength="3"
                    v-model="person.city">
                </input-string>

                <input-string
                    :label="'Country'"
                    :minLength="3"
                    v-model="person.country">
                </input-string>

                <input-string
                    :label="'Phone Number'"
                    :minLength="3"
                    v-model="person.phoneNumber">
                </input-string>
    
            </div>

            <div class="col-md-4">
                
                <div class="form-group">
                    <label> <strong> Profile </strong> </label>
                    <textarea v-model="profile" style="height: 125px" class="form-control"></textarea>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

import InputEmail from "@/components/forms/InputEmail.vue";
import InputString from "@/components/forms/InputString.vue";

export default {
  name: "Resume",
  components: {
    InputEmail,
    InputString
  },
  data() {
    return {
      person: {
          name: null,
          email: null,
          city: null,
          country: null,
          phoneNumber: null,
          jobTitle: null
      },
      profile: null,
    };
  }
};
</script>


<style scoped>

    div.header {
        vertical-align: top;
    }

    div.profile {
        color: #05284e;
    }

    .job-title {
        display: block;
    }

    hr {
        border-top: 2px solid #05284e;
    }

</style>
