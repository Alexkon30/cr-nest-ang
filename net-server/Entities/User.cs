namespace Sheduler.Entities;

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class User
{
  public int Id { get; set; }
  public string? Email { get; set; }
  public string? FirstName { get; set; }
  public string? LastName { get; set; }
  public string? Patronymic { get; set; }
  public Group? Group { get; set; }
  public int? GroupID { get; set; }

  [JsonIgnore]
  public string? PasswordHash { get; set; }
}


public class CreateUserRequest
{

  public required string FirstName { get; set; }

  public required string LastName { get; set; }

  [EmailAddress]
  public required string Email { get; set; }

  [MinLength(6)]
  public required string Password { get; set; }

  [Compare("Password")]
  public required string ConfirmPassword { get; set; }
}