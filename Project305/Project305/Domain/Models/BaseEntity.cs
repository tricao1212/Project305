using System.ComponentModel.DataAnnotations;

namespace Project305.Domain.Models
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
