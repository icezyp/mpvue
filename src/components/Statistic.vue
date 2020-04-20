<template>
    <div class="statistic-wrapper">
        <div class="statistic-l">
            <div class="stat-rate-wrapper">
                <div class="rank-avg">{{rankAvg}}</div>
                <div class="rate-show">
                    <van-rate
                        :value="rankAvg"
                        size="16"
                        color="#717882"
                        void-color="#dee0e2"
                        void-icon="star"
                        allow-half
                        readonly
                    >
                    </van-rate>
                </div>
            </div>
            <div class="rank-num">{{rankNum}}人点评</div>
        </div>
        <div class="statistic-r">
            <div class="state-num-wrapper">
                <div class="reader-num">{{readerNumer}}</div>
                <div class="reader-tips" v-if="readerNum > 10000">万</div>
                <div class="reader-tips">人在此读书</div>
            </div>
            <div 
                class="readers-avatar-wrapper" 
                v-if="readersArray.length"
            >
                <div 
                    class="avatar" 
                    v-for="(reader, index) in readersArray" 
                    :key="index"
                    :style="{left: (15 * index) + 'px'}"
                >
                    <ImageView 
                        :src="reader.avatarUrl" 
                        round 
                        mode="scaleToFill"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageView from '@/components/base/ImageView'
export default {
    props: {
        readers: {
            type: Array,
            default: []
        },
        readerNum: {
            type: Number,
            default: 0
        },
        rankNum: {
            type: Number,
            default: 0
        },
        rankAvg: {
            type: Number,
            default: 0
        }
    },
    components: {
        ImageView
    },
    methods: {
        
    },
    computed: {
        readerNumer() {
            return this.readerNum > 10000 ? this.readerNum / 10000 : this.readerNum
        },
        readersArray() {
            return this.readers && this.readers.length && this.readers.splice(0, 9) || []
        }
    }
}
</script>
<style lang="scss" scoped>
.statistic-wrapper {
    display: flex;
    padding: 0 20px;
    margin-top: 14.5px;
    justify-content: space-between;
    .statistic-l {
        flex: 1;
        .stat-rate-wrapper {
            display: flex;
            align-items: flex-end;
            .rank-avg {
                margin-right: 9px;
                font-size: 24px;
                color: #5e5e5e;
                line-height: 33.5px;
            }
            
        }
        .rank-num {
            margin-top: 11px;
            font-size: 11px;
            line-height: 14px;
            color: #99a0aa;
        }
    }
    .statistic-r {
        flex: 1;
        .state-num-wrapper {
            display: flex;
            align-items: flex-end;
            .reader-num {
                margin-right: 2.5px;
                font-size: 24px;
                line-height: 33.5px;
                color: #5e5e5e;
            }
            .reader-tips {
                margin-bottom: 8px;
                font-size: 11px;
                line-height: 14px;
                color: #99a0aa;
            }
        }
        .readers-avatar-wrapper {
            position: relative;
            height: 20px;
            margin-top: 6px;
            .avatar {
                position: absolute;
                width: 20px;
                height: 20px;
                top: 0;
                border: 1px solid rgba(255,255,255,0.50);
                box-shadow: 0 0 6px 0 rgba(0,0,0,0.20);
                border-radius: 50%;
            }
        }
    }
}
</style>