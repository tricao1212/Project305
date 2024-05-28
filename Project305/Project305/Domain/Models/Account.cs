using System.ComponentModel.DataAnnotations;

namespace Project305.Domain.Models
{
    public class Account : BaseEntity
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password {  get; set; }
        public int UserId { get; set; }

    }
}
