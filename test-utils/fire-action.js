"use strict";
/**
 * Used for testing to fire actions against a reducer.
 *
 * @param {Function} reducer Reducer to test
 * @param {Object} currentState The current state of the reducer
 * @param {String} type The action type to fire
 * @param {Object} payload The payload (optional) to fire
 * @return {Object} Updated state as a result of the action
 */
function fireAction(reducer, currentState, type, payload = {}) {
    return reducer(currentState, {
        type,
        payload
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fireAction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0dBUUc7QUFDSCxvQkFBbUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxHQUFHLEVBQUU7SUFDMUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7UUFDM0IsSUFBSTtRQUNKLE9BQU87S0FDUixDQUFDLENBQUM7QUFDTCxDQUFDO0FBTEQ7NEJBS0MsQ0FBQSJ9