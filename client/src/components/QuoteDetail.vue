<template>
    <div class="row">
      <br />
      <div class="col-sm-12 text-center">
        <div class="alert alert-info"> Identifier: {{ quoteInfo._id }} | Detail: {{ quoteInfo.description }}</div>
      </div>
      <div class="col-sm-12 text-center">
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
        });
    },
    goBack() {
      this.$router.push({ name: 'home' });
    }
  }
}
</script>
<style></style>