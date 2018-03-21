import lodash from 'lodash'

export const getters = {
    getMenuForDay: (state) => (day) => {
        return lodash.orderBy(state.days[day], 'rank')
    }
}
