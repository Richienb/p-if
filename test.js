import test from 'ava';
import m from './';

test('if', async t => {
	const val = await Promise.resolve('unicorn')
		.then(m(true, () => 'if', () => 'else'));

	t.is(val, 'if');
});

test('else', async t => {
	const val = await Promise.resolve('unicorn')
		.then(m(false, () => 'if', () => 'else'));

	t.is(val, 'else');
});

test('passthrough', async t => {
	const val = await Promise.resolve('unicorn')
		.then(m(false, () => 'if'));

	t.is(val, 'unicorn');
});

test('composability', async t => {
	const val = await Promise.resolve('unicorn')
		.then(m(true, m(false, () => 'if', () => 'else')));

	t.is(val, 'else');
});
