<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid
      :quotes="quotes"
      @quoteDeleted="deleteQuote"
    ></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to go the detail !</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";
import noteService from "./services/NoteService";

export default {
  data: function() {
    return {
      quotes: [],
      maxQuotes: 20
    };
  },
  created() {
    this.listQuote();
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete Quotes first!");
      }

      if (!quote) {
        return alert("Please write the quote first!");
      }

      noteService.postCreateNote(quote)
        .then( () => {
          this.listQuote();
        });
    },
    listQuote() {
      noteService.getNoteList()
        .then( res => {
          this.quotes = res.data.respond;
        });
    },
    deleteQuote(index) {
      noteService.getNote(index)
        .then( (res) => {
          console.log('getById: ',res);
          this.$router.push({ name: 'about', params: { id: index } });
        });
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
};
</script>

<style></style>
