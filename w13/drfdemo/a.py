


def test(required_arg, *args, **kwargs):
  print('required_arg: %s' % required_arg)

  for i, arg in enumerate(args):
    print('args: %i = %s' % (i, arg))

  print(kwargs.keys())
  for key, value in kwargs.items():
    print('%s = %s' % (key, value))    
  

a = [2, 4, 3, 5, 6, 7, 8]
d = {'key2': 2, 'key1': 1,'key10': 10}
test('req arg', *a, **d)