<template>
    <div class="row">
      <br />
      <div class="col-sm-12 text-center" id="qDetail">
        <div class="alert alert-info"> Identifier: {{ quoteInfo._id }} | Detail: {{ quoteInfo.description }}</div>
        <img src="../assets/logo.png">
      </div>
      <div class="col-sm-12 text-center">
        <button @click="goBack" class="btn btn-primary">Back</button>
      </div>
    </div>
</template>
<script>
import noteService from "../services/NoteService";

export default {
  data: function() {
  return {
    quoteInfo: {}
  }
  },
  created() {
    this.getQuote(this.$route.params.id);
  },
  methods: {
    getQuote(index) {
      noteService.getNote(index)
        .then( (res) => {
          this.quoteInfo = res.data.respond;
        }, (err) => {
          if(err.message === "Network Error"){
            document.getElementById("qDetail").innerHTML = 
              `<div class="col-sm-12 text-center">
                <img src="../img/offline.png">
              </div>`;
          }
        });
    },
    goBack() {
      this.$router.push({ name: 'home' });
    }
  }
}
</script>
<style></style>