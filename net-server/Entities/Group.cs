namespace Sheduler.Entities;


public class Group {
  public int Id { get; set; }
  public string? Title { get; set; }
  public ICollection<User>? Students { get; set; }
}