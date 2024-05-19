using System.ComponentModel.DataAnnotations.Schema;

namespace Project305.Models
{
    public class PatientDOB
    {
        public int Id { get; set; }
        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        public User User { get; set; }
        public DateTime Dob {  get; set; }
    }
}
