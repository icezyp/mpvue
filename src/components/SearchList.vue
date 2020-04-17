<template>
    <div class="search-list">
        <SearchItem 
            
        />
        <SearchItem />
        <SearchItem />
        <BookList />
    </div>
</template>
<script>
import SearchItem from './SearchItem'
import BookList from './BookList'
export default {
    components: {
        SearchItem,
        BookList
    }
}
</script>
<style lang="scss" scoped>

</style>