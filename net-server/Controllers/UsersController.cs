namespace Sheduler.Controllers;

using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Authorization;
using Sheduler.Services;
using Sheduler.Entities;

[ApiController]
[Route("[controller]")]
// [Authorize]
public class UsersController : ControllerBase
{
  private readonly IUserService _userService;


  public UsersController(
    IUserService userService)
  {
    _userService = userService;

  }

  [HttpGet]
  // [AllowAnonymous]
  public IActionResult GetAll()
  {
    var users = _userService.GetAll();
    return Ok(users);
  }

  [HttpGet("{id}")]
  public IActionResult GetUserById(int id)
  {
    var user = _userService.GetUserById(id);
    if (user != null)
    {
      return Ok(user);
    }
    else
    {
      return NotFound();
    }
  }

  [HttpPost]
  public IActionResult Create(CreateUserRequest model)
  {
    _userService.Create(model);
    return Ok(new { message = "User created" });
  }
}