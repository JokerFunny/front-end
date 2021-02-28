import { blabla } from '../../env';
import { authHeader, handleResponse } from '../_helpers';

export const userService = {
    getAll,
    getById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${blabla.urlPath}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${blabla.urlPath}/users/${id}`, requestOptions).then(handleResponse);
}