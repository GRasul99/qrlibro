<template>
  <section class="section-fluid">
    <div class="form">
      <label>
        <BaseIcon name="search" width="30" height="30" />
        <input
          class="-shadow"
          type="search"
          v-model="search"
          :placeholder="$t('search')"
        />
      </label>
    </div>
    <div class="book-cards">
      <BookCard v-for="book in filteredBook" :key="book.id" :book="book" />
    </div>
  </section>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import store from '@/store'
import { mapState } from 'vuex'
import NProgress from 'nprogress'
export default {
  data() {
    return {
      search: ''
    }
  },
  components: {
    BookCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start()
    store.dispatch('book/fetchBooks').then(() => {
      NProgress.done()
      next()
    })
  },
  computed: {
    ...mapState(['books', 'book']),
    filteredBook() {
      return this.book.books.filter(data => {
        let author = data.author.toLowerCase().match(this.search.toLowerCase())
        let book_name = data.title
          .toLowerCase()
          .match(this.search.toLowerCase())
        return author || book_name
      })
    }
  }
}
</script>

<style lang="scss">
/*.book-cards {*/
/*  display: grid;*/
/*  grid-template-columns: 1fr 1fr;*/
/*  grid-gap: 15px;*/
/*  margin-top: 15px;*/
/*}*/
.book-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-grow: 1;
}
</style>
