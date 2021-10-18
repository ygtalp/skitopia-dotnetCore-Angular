using Microsoft.AspNetCore.Identity;

namespace Kernel.Entities.Identity
{
    public class AppUser : IdentityUser
    {
        public string ProfileName { get; set; }
        public Address Address { get; set; }
    }
}
