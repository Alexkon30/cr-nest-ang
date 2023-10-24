namespace Sheduler.Services;

using AutoMapper;
using BCrypt.Net;
using Sheduler.Data;
using Sheduler.Entities;
using Sheduler.Helpers;

public interface IUserService
{
  IEnumerable<User> GetAll();
  User? GetUserById(int id);
  void Create(CreateUserRequest model);
}


public class UserService : IUserService
{
  private readonly ShedulerContext _context;
  private readonly IMapper _mapper;

  public UserService(ShedulerContext context, IMapper mapper)
  {
    _context = context;
    _mapper = mapper;
  }

  public IEnumerable<User> GetAll()
  {
    return _context.Users;
  }

  public User? GetUserById(int id)
  {
    return _context.Users.Find(id);
  }

  public void Create(CreateUserRequest model)
  {
    // validate
    if (_context.Users.Any(x => x.Email == model.Email))
      throw new AppException("User with the email '" + model.Email + "' already exists");

    // map model to new user object
    var user = _mapper.Map<User>(model);

    // hash password
    user.PasswordHash = BCrypt.HashPassword(model.Password);

    // save user
    _context.Users.Add(user);
    _context.SaveChanges();
  }
}
